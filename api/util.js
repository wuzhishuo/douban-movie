function createAPI(baseURL) {
  return function (opts) {
    opts = opts || {};
    if (/.\/$/.test(baseURL)) {
      baseURL = baseURL.substr(0, baseURL.lastIndexOf("/"));
    }

    if (!/^\//.test(opts.url)) {
      opts.url = `/${opts.url}`;
    }

    return wx.request({
      url: `${baseURL}${opts.url}`,
      method: opts.method,
      data: opts.data,
      header: {
        "Content-Type": "json",
        ...opts.header
      },
      dataType: 'json',
      success: function (res) {
        if (res.statusCode !== 200) {
          wx.showToast({
            title: "请求失败"
          })

          return;
        }

        if (typeof opts.success === 'function') {
          opts.success(res.data);
        }
      },
      fail: function (res) {
        if (typeof opts.fail === 'function') {
          opts.fail(res);
        }
      },
      complete: function (res) {
        if (typeof opts.complete === 'function') {
          opts.complete();
        }
      }
    })
  };
}

function convertRESTAPI(url, params) {
  if (!params) return url;

  const pathKeys = Object.keys(params);

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g');
    url = url.replace(r, params[key]);
  });

  return url;
}

module.exports = {
  createAPI,
  convertRESTAPI
};
