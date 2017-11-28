module.exports = {
  output: "api", // 产出到项目下的 api 目录，不用手动创建
  template: "../wx-request-template/", // 基于 easy-mock-templates 提供的 axios 模板
  projects: [
    {
      id: "5a153b61f64292527e6639dc", // 例：58fef6ac5e43ae5dbea5eb53
      name: "movie" // 该项目下的 API 生成之后会被放到 api/demo 目录下
    }
  ]
};