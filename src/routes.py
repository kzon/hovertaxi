from handlers import *

routes = [
    (r"/", main.IndexHandler),

    (r"/api/order/getPreOrderInfo", order.GetPreOrderInfoHandler),
    (r"/api/order/createOrder", order.CreateOrderHandler),
    (r"/api/order/loadCurrentOrder", order.LoadCurrentOrderHandler),
    (r"/api/order/cancelOrder", order.CancelOrderHandler),

    (r"/api/aircraft/loadInCircle", aircraft.LoadInCircleHandler),
    (r"/api/aircraft/loadCurrentOrderAircraft", aircraft.LoadCurrentOrderAircraftHandler),
    (r"/api/aircraft/loadAircraftClasses", aircraft.LoadAircraftClassesHandler),
    (r"/api/aircraft/loadNearestPads", aircraft.LoadNearestPadsHandler),
]
