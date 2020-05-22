import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import { loginRSA } from "@/config/settings";
export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data);
  }
  return request({
    url: "/publics/login",
    method: "post",
    data,
  });
}

export function getInfo(accessToken) {
  return request({
    url: "/admin/info",
    method: "post",
    data: {
      accessToken,
    },
  });
}

export function logout() {
  return request({
    url: "/admin/logout",
    method: "post",
  });
}
