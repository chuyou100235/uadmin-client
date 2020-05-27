import request from "@/utils/request";

export function getRouterList(data) {
  return request({
    url: "/core/menu/navigate",
    method: "post",
    data,
  });
}
export function sendHttp(params) {
  return request({
    url: params.url,
    method: params.method,
    data: params.data,
  });
}
