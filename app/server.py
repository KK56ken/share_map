import tornado.ioloop
import tornado.web
import os
import sys
import folium
from model.group import group
from model.pin import pin
from controller.AsyncHandler import AsyncHandler

class MainHandler(tornado.web.RequestHandler):
  def get(self):
    self.render("index.html")

application = tornado.web.Application([
  (r"/",MainHandler),
  (r"/async", AsyncHandler),
],
  template_path=os.path.join(os.getcwd(), "view"),
  static_path=os.path.join(os.getcwd(), "static"),
)

# def create_map():
#   tokyo = folium.Map(location=[36, 140],zoom_start=4)
#   folium.Marker([36, 140], popup='tokyo').add_to(tokyo)
#   tokyo.save('../app/templates/tokyo.html')

if __name__ == "__main__":
  args = sys.argv
  if len(args) > 1:
    if args[1] == "migrate":
      group.migrate()
      pin.migrate()
  else:
    # create_map()
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()