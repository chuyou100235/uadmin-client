import request from "@/utils/request";

export function getList(params) {
  return request({
    url: params.url,
    method: params.method,
    data: params.data,
  });
}

export function doEdit(data) {
  return request({
    url: "/table/doEdit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/table/doDelete",
    method: "post",
    data,
  });
}
