import tornado.web
from tornado.httpclient import AsyncHTTPClient


#非同期テスト用ハンドラー
class AsyncHandler(tornado.web.RequestHandler):

    async def get(self):
        body = await self.getRate()
        self.set_header("Content-type", "application/json")
        self.write(body)
    async def getRate(self):
        http_client = AsyncHTTPClient()
        try:
            response = "ABC"
            return response.body
        except Exception as e:
            print("Error: %s" % e)
