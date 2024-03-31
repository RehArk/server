const {jest, describe, test, expect} = require('@jest/globals');
const http = require('http');
const https = require('https');
const fs = require('fs');
const { Readable } = require('stream');

let testFileData1 = "test1";
let testFileData2 = "test22";
let testFileData3 = "test333";
let testFileData4 = testFileData3;

jest.mock("fs/promises", () => ({
  ...jest.requireActual('fs/promises'),
  cp: jest.fn().mockImplementation((from, to) => fs.writeFileSync(to, testFileData3))
}));
const { cp } = require('fs/promises');

const operationContext = require('../../../Common/sources/operationContext');
const storage = require('../../../Common/sources/storage-base');
const utils = require('../../../Common/sources/utils');
const commonDefines = require("../../../Common/sources/commondefines");
const config = require('../../../Common/node_modules/config');

const cfgCacheStorage = config.get('storage');
const cfgPersistentStorage = utils.deepMergeObjects({}, cfgCacheStorage, config.get('persistentStorage'));

const ctx = operationContext.global;
const rand = Math.floor(Math.random() * 1000000);
const testDir = "DocService-DocsCoServer-storage-" + rand;
const baseUrl = "http://localhost:8000";
const urlType = commonDefines.c_oAscUrlTypes.Session;
let testFile1 = testDir + "/test1.txt";
let testFile2 = testDir + "/test2.txt";
let testFile3 = testDir + "/test3.txt";
let testFile4 = testDir + "/test4.txt";
let specialDirCache = "";
let specialDirForgotten = "forgotten";

console.debug(`testDir: ${testDir}`)

function getStorageCfg(specialDir) {
  return specialDir ? cfgPersistentStorage : cfgCacheStorage;
}

function request(url) {
  return new Promise(resolve => {
    let module = url.startsWith('https') ? https : http;
    module.get(url, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
function runTestForDir(specialDir) {
  test("start listObjects", async () => {
    let list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list).toEqual([]);
  });
  test("putObject", async () => {
    let buffer = Buffer.from(testFileData1);
    let res = await storage.putObject(ctx, testFile1, buffer, buffer.length, specialDir);
    expect(res).toEqual(undefined);
    let list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([testFile1].sort());
  });
  test("putObject-stream", async () => {
    let buffer = Buffer.from(testFileData2);
    const stream = Readable.from(buffer);
    let res = await storage.putObject(ctx, testFile2, stream, buffer.length, specialDir);
    expect(res).toEqual(undefined);
    let list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([testFile1, testFile2].sort());
  });
  if ("storage-fs" === getStorageCfg(specialDir).name) {
    test("UploadObject", async () => {
      let res = await storage.uploadObject(ctx, testFile3, "createReadStream.txt", specialDir);
      expect(res).toEqual(undefined);
      expect(cp).toHaveBeenCalled();
      let list = await storage.listObjects(ctx, testDir, specialDir);
      expect(list.sort()).toEqual([testFile1, testFile2, testFile3].sort());
    });
  } else {
    test("uploadObject", async () => {
      const spy = jest.spyOn(fs, 'createReadStream').mockReturnValue(testFileData3);
      let res = await storage.uploadObject(ctx, testFile3, "createReadStream.txt", specialDir);
      expect(res).toEqual(undefined);
      let list = await storage.listObjects(ctx, testDir, specialDir);
      expect(spy).toHaveBeenCalled();
      expect(list.sort()).toEqual([testFile1, testFile2, testFile3].sort());
      spy.mockRestore();
    });
  }
  test("copyObject", async () => {
    let res = await storage.copyObject(ctx, testFile3, testFile4, specialDir, specialDir);
    expect(res).toEqual(undefined);
    // let buffer = Buffer.from(testFileData3);
    // await storage.putObject(ctx, testFile3, buffer, buffer.length, specialDir);
    let list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([testFile1, testFile2, testFile3, testFile4].sort());
  });
  test("headObject", async () => {
    let output;
    output = await storage.headObject(ctx, testFile1, specialDir);
    expect(output).toMatchObject({ContentLength: testFileData1.length});

    output =  await storage.headObject(ctx, testFile2, specialDir);
    expect(output).toMatchObject({ContentLength: testFileData2.length});

    output =  await storage.headObject(ctx, testFile3, specialDir);
    expect(output).toMatchObject({ContentLength: testFileData3.length});

    output =  await storage.headObject(ctx, testFile4, specialDir);
    expect(output).toMatchObject({ContentLength: testFileData4.length});
  });
  test("getObject", async () => {
    let output;
    output = await storage.getObject(ctx, testFile1, specialDir);
    expect(output.toString("utf8")).toEqual(testFileData1);

    output =  await storage.getObject(ctx, testFile2, specialDir);
    expect(output.toString("utf8")).toEqual(testFileData2);

    output =  await storage.getObject(ctx, testFile3, specialDir);
    expect(output.toString("utf8")).toEqual(testFileData3);

    output =  await storage.getObject(ctx, testFile4, specialDir);
    expect(output.toString("utf8")).toEqual(testFileData4);
  });
  test("createReadStream", async () => {
    let output, outputText;

    output = await storage.createReadStream(ctx, testFile1, specialDir);
    await utils.sleep(100);
    expect(output.contentLength).toEqual(testFileData1.length);
    outputText = await utils.stream2Buffer(output.readStream);
    await utils.sleep(100);
    expect(outputText.toString("utf8")).toEqual(testFileData1);

    output = await storage.createReadStream(ctx, testFile2, specialDir);
    expect(output.contentLength).toEqual(testFileData2.length);
    outputText = await utils.stream2Buffer(output.readStream);
    expect(outputText.toString("utf8")).toEqual(testFileData2);

    output = await storage.createReadStream(ctx, testFile3, specialDir);
    expect(output.contentLength).toEqual(testFileData3.length);
    outputText = await utils.stream2Buffer(output.readStream);
    expect(outputText.toString("utf8")).toEqual(testFileData3);
  });
  test("getSignedUrl", async () => {
    let url, urls, data;
    url = await storage.getSignedUrl(ctx, baseUrl, testFile1, urlType, undefined, undefined, specialDir);
    data = await request(url);
    expect(data).toEqual(testFileData1);

    url = await storage.getSignedUrl(ctx, baseUrl, testFile2, urlType, undefined, undefined, specialDir);
    data = await request(url);
    expect(data).toEqual(testFileData2);

    url = await storage.getSignedUrl(ctx, baseUrl, testFile3, urlType, undefined, undefined, specialDir);
    data = await request(url);
    expect(data).toEqual(testFileData3);

    url = await storage.getSignedUrl(ctx, baseUrl, testFile4, urlType, undefined, undefined, specialDir);
    data = await request(url);
    expect(data).toEqual(testFileData4);
  });
  test("getSignedUrls", async () => {
    let urls, data;
    urls = await storage.getSignedUrls(ctx, baseUrl, testDir, urlType, undefined, specialDir);
    data = [];
    for(let i in urls) {
      data.push(await request(urls[i]));
    }
    expect(data.sort()).toEqual([testFileData1, testFileData2, testFileData3, testFileData4].sort());
  });
  test("getSignedUrlsArrayByArray", async () => {
    let urls, data;
    urls = await storage.getSignedUrlsArrayByArray(ctx, baseUrl, [testFile1, testFile2], urlType, specialDir);
    data = [];
    for(let i = 0; i < urls.length; ++i) {
      data.push(await request(urls[i]));
    }
    expect(data.sort()).toEqual([testFileData1, testFileData2].sort());
  });
  test("getSignedUrlsByArray", async () => {
    let urls, data;
    urls = await storage.getSignedUrlsByArray(ctx, baseUrl, [testFile3, testFile4], undefined, urlType, specialDir);
    data = [];
    for(let i in urls) {
      data.push(await request(urls[i]));
    }
    expect(data.sort()).toEqual([testFileData3, testFileData4].sort());
  });
  test("deleteObject", async () => {
    let list;
    list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([testFile1, testFile2, testFile3, testFile4].sort());

    let res = await storage.deleteObject(ctx, testFile1, specialDir);
    expect(res).toEqual(undefined);

    list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([testFile2, testFile3, testFile4].sort());
  });
  test("deletePath", async () => {
    let list;
    list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([testFile2, testFile3, testFile4].sort());

    let res = await storage.deletePath(ctx, testDir, specialDir);
    expect(res).toEqual(undefined);

    list = await storage.listObjects(ctx, testDir, specialDir);
    expect(list.sort()).toEqual([].sort());
  });
}

// Assumed, that server is already up.
describe('storage common dir', function () {
  runTestForDir(specialDirCache);
});

describe('storage forgotten dir', function () {
  runTestForDir(specialDirForgotten);
});

describe('storage mix common and forgotten dir', function () {
  test("putObject", async () => {
    let buffer = Buffer.from(testFileData1);
    let res = await storage.putObject(ctx, testFile1, buffer, buffer.length, specialDirCache);
    expect(res).toEqual(undefined);
    let list = await storage.listObjects(ctx, testDir, specialDirCache);
    expect(list.sort()).toEqual([testFile1].sort());

    buffer = Buffer.from(testFileData2);
    res = await storage.putObject(ctx, testFile2, buffer, buffer.length, specialDirForgotten);
    expect(res).toEqual(undefined);
    list = await storage.listObjects(ctx, testDir, specialDirForgotten);
    expect(list.sort()).toEqual([testFile2].sort());
  });

  test("copyPath", async () => {
    let list, res;
    res = await storage.copyPath(ctx, testDir, testDir, specialDirCache, specialDirForgotten);
    expect(res).toEqual(undefined);

    list = await storage.listObjects(ctx, testDir, specialDirForgotten);
    expect(list.sort()).toEqual([testFile1, testFile2].sort());
  });
  test("copyObject", async () => {
    let list, res;
    res = await storage.copyObject(ctx, testFile2, testFile2, specialDirForgotten, specialDirCache);
    expect(res).toEqual(undefined);

    list = await storage.listObjects(ctx, testDir, specialDirCache);
    expect(list.sort()).toEqual([testFile1, testFile2].sort());
  });

  test("deletePath", async () => {
    let list, res;
    res = await storage.deletePath(ctx, testDir, specialDirCache);
    expect(res).toEqual(undefined);

    list = await storage.listObjects(ctx, testDir, specialDirCache);
    expect(list.sort()).toEqual([].sort());

    res = await storage.deletePath(ctx, testDir, specialDirForgotten);
    expect(res).toEqual(undefined);

    list = await storage.listObjects(ctx, testDir, specialDirForgotten);
    expect(list.sort()).toEqual([].sort());
  });
});
