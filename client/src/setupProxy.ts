import { createProxyMiddleware, RequestHandler } from "http-proxy-middleware";

export default function (app:{use:(arg1:string[], arg2:RequestHandler) => void}):void {
    app.use(
      ["/auth", "/refresh", "/vacations", "/images", '/socket.io'],
      createProxyMiddleware({
        target: "http://localhost:4545",
        ws: true,
        changeOrigin: true,
      })
    );
}
