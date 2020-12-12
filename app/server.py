import tornado.ioloop
import tornado.web
import os
import sys
import folium

class MainHandler(tornado.web.RequestHandler):
  def get(self):
    self.render("tokyo.html")

application = tornado.web.Application([
  (r"/",MainHandler),
],
  template_path=os.path.join(os.getcwd(),"templates")
)

def create_map():
  tokyo = folium.Map(location=[36, 140],zoom_start=4)
  folium.Marker([36, 140], popup='tokyo').add_to(tokyo)
  tokyo.save('../app/templates/tokyo.html')

if __name__ == "__main__":
  create_map()
  application.listen(8888)
  tornado.ioloop.IOLoop.instance().start()