import http from "./http";
//用于管理整个项目的所有接口
//首页的轮播图接口
export const carouselApi = (params) => http.get("/home/banner", params);
//首页的商品推荐图片
export const recommendApi = (params) => http.post("/home/recommend", params);
//尿不湿页面的图片和内容
export const diapersApi = (params) => http.post("/home/recommend", params);
//分类页面的所有商品
export const productApi = (params) => http.post("/classify", params);
