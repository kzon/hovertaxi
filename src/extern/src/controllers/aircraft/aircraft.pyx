import models
from libcpp.string cimport string
from libcpp.pair cimport pair


cdef extern from "aircraft_controller.h" namespace "hovertaxi":
    cdef cppclass Context:
        string user_id


cdef extern from "aircraft_controller.h" namespace "hovertaxi":
    cdef cppclass AircraftController:
        AircraftController(Context & context) except +
        string LoadAircraftInCircle(pair[double, double] & center, int radius) except +
        string LoadAircraftClasses() except +
        string LoadAircraftById(string & id) except +
        string LoadCurrentOrderAircraft() except +
        string LoadNearestPads(pair[double, double] & position) except +


cdef class AircraftControllerWrapper:
    cdef AircraftController *controller

    def __cinit__(self, string user_id):
        cdef Context context
        context.user_id = user_id
        self.controller = new AircraftController(context)

    def __dealloc__(self):
        del self.controller

    def load_aircraft_in_circle(self, center: tuple, radius: int) -> str:
        return self.controller.LoadAircraftInCircle(center, radius).decode()

    def load_aircraft_classes(self) -> str:
        return self.controller.LoadAircraftClasses().decode()

    def load_aircraft_by_id(self, id: str) -> str:
        return self.controller.LoadAircraftById(id.encode()).decode()

    def load_current_order_aircraft(self) -> str:
        return self.controller.LoadCurrentOrderAircraft().decode()

    def load_nearest_pads(self, position: tuple) -> str:
        return self.controller.LoadNearestPads(position).decode()

def get_wrapper(context: models.Context) -> AircraftControllerWrapper:
    return AircraftControllerWrapper(context.user_id.encode())
