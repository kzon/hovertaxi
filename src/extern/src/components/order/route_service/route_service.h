#pragma once

#include <vector>
#include "models/route.h"
#include "models/order.h"
#include "models/aircraft.h"
#include "models/pad.h"
#include "services/geo/geo.h"
#include "services/data_manager/data_manager.h"

namespace hovertaxi {

class RouteService {
 public:
  RouteService() : data_manager_(DataManager::GetInstance()) {}

  Route GetRoute(const Order &order);
  std::vector<Route> GetCrossingRoutes(const Route &route);
  int GetTimeToArrival(const Order &order) const;

  //returns time in minutes
  int GetTimeFlight(const GeoPoint &p1, const GeoPoint &p2, const AircraftModel &model) const;
 private:
  const DataManager &data_manager_;
};

}