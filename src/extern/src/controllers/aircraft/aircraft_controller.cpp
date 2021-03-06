#include "aircraft_controller.h"

namespace hovertaxi {

std::string AircraftController::LoadAircraftInCircle(const std::pair<double, double> &center, int radius) {
  auto aircraft_classes = aircraft_component_.LoadAircraftInCircle(GeoPoint{center.first, center.second}, radius);
  return JSON::ToJSON(aircraft_classes);
}

std::string AircraftController::LoadAircraftClasses() {
  auto aircraft_classes = aircraft_component_.LoadAircraftClasses();
  return JSON::ToJSON(aircraft_classes);
}

std::string AircraftController::LoadCurrentOrderAircraft() {
  auto aircraft = aircraft_component_.LoadCurrentOrderAircraft();
  return JSON::ToJSON(aircraft);
}

std::string AircraftController::LoadNearestPads(const std::pair<double, double> &position) {
  auto pads = aircraft_component_.LoadNearestPads(GeoPoint{position.first, position.second});
  return JSON::ToJSON(pads);
}

std::string AircraftController::LoadAircraftById(const std::string &id) {
  auto aircraft = data_manager_.LoadAircraftById(id);
  return aircraft ? JSON::ToJSON(aircraft.value()) : JSON::Empty();
}

}