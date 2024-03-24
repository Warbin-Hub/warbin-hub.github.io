/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/11/Typora教程/index.html","d9b25fe6a26f78a32d1cd4d7cf367d1f"],["/2022/12/08/蓝桥杯备赛/index.html","155457de14d4ccb7a5cd822faa213644"],["/2022/12/15/蓝桥杯Eclipse个人设置/index.html","4cd2bd6ce50d621281d1b48c55eda0ff"],["/2023/01/05/编译原理期末复习/index.html","94bd4b5c9f08a32b9c937b53a44e7e47"],["/2023/02/01/九转软件工程/index.html","e2f47a0446eb02a9253e84a27aa2dc70"],["/2024/03/08/申论大作文/index.html","70e6c5276099d22a6e7b1e2b94862944"],["/2024/03/20/事业编综应c/index.html","ee59e6f6a1cd55f2bcedb992f19710f5"],["/404.html","439c649d9e1729164c263e6fcacb8ce4"],["/about/index.html","426fca62923641f25204ae5248c354b4"],["/archives/2022/10/index.html","90c625904c4828e36f8a171fd39cc1be"],["/archives/2022/12/index.html","9fb0d30c9e6dfed42c11251535459b54"],["/archives/2022/index.html","50e073955a58d2407a4a977510ff5d6a"],["/archives/2023/01/index.html","f8166fcc6479b366c6af3538b0efb300"],["/archives/2023/02/index.html","0fe9f72f60f35b0965a1d031d0fb4581"],["/archives/2023/index.html","5f90d5194ca9620b5de98f4ec39c800e"],["/archives/2024/03/index.html","690ec46b0e7e06c86154698750f8dcb8"],["/archives/2024/index.html","6458554ba6f9a4e4b2d02c25837f29be"],["/archives/index.html","906b4c671187d9fd134bc1e95b4d572f"],["/categories/Curriculum-Software-Engineering/index.html","3371e770bcb9b46fa237c7ffddb720ca"],["/categories/Principle-of-Compiler/index.html","e6ac4e5570d6c10fba6e77efb3665da4"],["/categories/Tools-Technology/index.html","0c0d1cafd52b88e4273a6bc120c558a8"],["/categories/catalogue/index.html","b78f26a0c071cb955b6a7799ded38b9e"],["/categories/essay/index.html","519a4e9c6c500bf360a91b7f7b08a07c"],["/categories/index.html","5cba9162a6f9227b1f37c19ba1540d41"],["/css/README.html","5b0fdfbf117addbdb14fc3c03d2d3a34"],["/css/hexo-theme-yun.css","ba87d7f74112f93d48ce53ba9c79866a"],["/head.jpg","1ee70e64e5d736915ff6b0964886f11d"],["/image-20221017145530694.png","bfda25371debb65734e82020a950d25a"],["/index.html","afcee7c2e8b87f5c9e28eefa3fcececd"],["/js/analytics/leancloud-visitors.js","ae075be42f85ed6070f74548c26f27ae"],["/js/chunk-72ZP56JR.js","5e6b70e463043f34242d00185e1d8824"],["/js/chunk-FEIY7W7S.js","059a67f28b1d3a640af23ec822aac13c"],["/js/comments/disqus.js","fe34266e34a398f9f1140e14a2f28ddf"],["/js/comments/waline.js","d1d27943a28485308a2c8a85c8c360cd"],["/js/gallery-decrypt.js","f003f4ff0776dd3512d3d6bf82ec2643"],["/js/hexo-theme-yun.js","d23a79ce57eb9ca026699a4fc7bf552f"],["/js/load-aplayer.js","86e1cb07a4f433cd46dd663e34f10deb"],["/js/pjax.js","733473c9ac7586dbb3bb5fe9f6285472"],["/js/say.js","81ee4916f2fb658604b2e9df351aeec5"],["/js/search/algolia-search.js","27354e17328fef8a2391b58c05da9886"],["/js/search/local-search.js","39874b7b68316996c68f9aa0121d5e8a"],["/js/sidebar.js","a31dcac177c81a2d20f8b60517fb82e8"],["/js/ui/banner.js","392fad43156755d21113e66f7ba2f531"],["/js/ui/fireworks.js","f6c73b3ce275bc7a565cb5721b4154e0"],["/js/utils.js","8f2f93b953c9f68012d54316e4e20866"],["/sw-register.js","a9cbc1b863c46bd24b8f4beac9266796"],["/tags/Blue-Bridge-Cup/index.html","16584fee76c3447cc4a000d2d7c67e58"],["/tags/finalexam/index.html","591d0da0b8d047c7e4b95846a232da6e"],["/tags/index.html","36e30d7d4f9172a4dabbfcb3e6f18c11"],["/tags/study/index.html","983a520ebbabf8931d75d5f29f04a2d2"],["/tags/technology/index.html","c699dbd5c72cd9ea6799e57282a63496"],["/yun.png","7d146507ca781cdb7995afaa448a4101"],["/yun.svg","ebbd22f3cde555d95e5dec5d41ed8505"]];
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
