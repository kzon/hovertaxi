import tornado.web

from extern.wrappers.controllers.vehicle import vehicle


class DemoController:
    class IndexHandler(tornado.web.RequestHandler):
        def get(self):
            self.write(vehicle.loadVehicles())
