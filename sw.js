/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/11/Typora教程/index.html","a50fcbcfe52a0b097e28dbd88361a5c3"],["/2022/12/08/蓝桥杯备赛/index.html","cb4d226a965adf9f210d0e063790e676"],["/2022/12/15/蓝桥杯Eclipse个人设置/index.html","bc9cd5bacb70bb87b177bc1673a02743"],["/2023/01/05/编译原理期末复习/index.html","517f721239d863c30f50ea1203a7acba"],["/2023/02/01/九转软件工程/index.html","d8681d94a4fc08ebbf5af4e70558bc30"],["/2024/03/08/申论大作文/index.html","43fe5ce6331ea22e29ca2f7fa2903716"],["/2024/03/20/事业编综应c/index.html","b58b1af9333518c31c2d03e28d66878b"],["/2024/04/04/人工智能学习路线/index.html","b417b21b76b54ca0a29af4653f3c9cd0"],["/2024/04/04/毕业论文/index.html","fbdf8262b0873ab30ce9274697c4071d"],["/2024/04/11/规划路线/index.html","364d272628910b0eae72d04a985d8805"],["/2024/05/11/欢乐钓鱼大师自动钓鱼开发/index.html","bf7fd0a715d0f8cad6594b2e5c245c7b"],["/2024/05/19/和咱家瘦宝一起吃遍合肥计划/index.html","08d60e85bbee1297297281fdfc900c34"],["/404.html","6d6648bbddff06ac7115b38bea957515"],["/about/index.html","5d678b577ad0ca2aef3ed71e062f6edf"],["/archives/2022/10/index.html","830698d87b8c12f0e562dbc2bedb4bef"],["/archives/2022/12/index.html","27856465830a191371a77675666b7ca8"],["/archives/2022/index.html","11c7ab85aad805c25632fa38b0a8d2f5"],["/archives/2023/01/index.html","2c91034371625cbbb5501b3a1bef7553"],["/archives/2023/02/index.html","5bdcaf992bfe8469888871ec7137afdd"],["/archives/2023/index.html","4f0852ee453600df42c0063f906e549b"],["/archives/2024/03/index.html","10bd72d785bfcf889e2097a5e2dcc735"],["/archives/2024/04/index.html","8b2d68de8fc32c5a1bbbb5fde53b196b"],["/archives/2024/05/index.html","0af3e96116871475ba3cb77faf45f72c"],["/archives/2024/index.html","0ff6b8d5f72bfa0c85634be8501c8b13"],["/archives/index.html","41c830629698200ba843367bd92f0698"],["/archives/page/2/index.html","8f580f208652bc074a416ea27866430f"],["/categories/Curriculum-Software-Engineering/index.html","044868a529d711a435ad5cd2531ebfb9"],["/categories/Principle-of-Compiler/index.html","8b558530c95424657a37e5611d22b614"],["/categories/Tools-Technology/index.html","36399ed1773652dc07d89e156fdea5d8"],["/categories/catalogue/index.html","32ab55d4d846190fd6c1cd6a6279b22a"],["/categories/eat/index.html","0b5f451cebdd615bb54c279670e21882"],["/categories/essay/index.html","7a8305b2fb91880fe5ab6587ddf19fdc"],["/categories/index.html","d3dd0dc355cae9cc5694410566184c38"],["/css/README.html","5b0fdfbf117addbdb14fc3c03d2d3a34"],["/css/hexo-theme-yun.css","ba87d7f74112f93d48ce53ba9c79866a"],["/head.jpg","1ee70e64e5d736915ff6b0964886f11d"],["/image-20221017145530694.png","bfda25371debb65734e82020a950d25a"],["/index.html","656d6c7f7cb67cf44910fb0135692667"],["/js/analytics/leancloud-visitors.js","ae075be42f85ed6070f74548c26f27ae"],["/js/chunk-72ZP56JR.js","5e6b70e463043f34242d00185e1d8824"],["/js/chunk-FEIY7W7S.js","059a67f28b1d3a640af23ec822aac13c"],["/js/comments/disqus.js","fe34266e34a398f9f1140e14a2f28ddf"],["/js/comments/waline.js","d1d27943a28485308a2c8a85c8c360cd"],["/js/gallery-decrypt.js","f003f4ff0776dd3512d3d6bf82ec2643"],["/js/hexo-theme-yun.js","d23a79ce57eb9ca026699a4fc7bf552f"],["/js/load-aplayer.js","86e1cb07a4f433cd46dd663e34f10deb"],["/js/pjax.js","733473c9ac7586dbb3bb5fe9f6285472"],["/js/say.js","81ee4916f2fb658604b2e9df351aeec5"],["/js/search/algolia-search.js","27354e17328fef8a2391b58c05da9886"],["/js/search/local-search.js","39874b7b68316996c68f9aa0121d5e8a"],["/js/sidebar.js","a31dcac177c81a2d20f8b60517fb82e8"],["/js/ui/banner.js","392fad43156755d21113e66f7ba2f531"],["/js/ui/fireworks.js","f6c73b3ce275bc7a565cb5721b4154e0"],["/js/utils.js","8f2f93b953c9f68012d54316e4e20866"],["/page/2/index.html","751123e2928b8525fcc6f2bc363bd7ff"],["/sw-register.js","87ad76a757393cce8a0581dd4529c2cf"],["/tags/Blue-Bridge-Cup/index.html","7720a7a75eec155f3dd12b50d7cfcaee"],["/tags/finalexam/index.html","27da9240db14428e8b75c5df10d3ba70"],["/tags/index.html","792bc8cd6668300734730c8025d47090"],["/tags/life/index.html","c4ddf27af68b6cc92942cdfffa8579ce"],["/tags/study/index.html","c8ce8c6f91281b5a552bdc5be40c59d6"],["/tags/technology/index.html","250e786c3bd705f332ed937de6a87ccf"],["/yun.png","7d146507ca781cdb7995afaa448a4101"],["/yun.svg","ebbd22f3cde555d95e5dec5d41ed8505"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
