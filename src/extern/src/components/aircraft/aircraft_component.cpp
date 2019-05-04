#include "aircraft_component.h"

#include "models/aircraft.h"
#include "services/service_locator/service_locator.h"

namespace hovertaxi {

std::vector<Aircraft> AircraftComponent::LoadAircraftInCircle(const GeoPoint &center, int radius) {
  return std::vector<Aircraft>();
}

std::vector<Aircraft> AircraftComponent::LoadCurrentOrderAircraft() {
  return std::vector<Aircraft>();
}

std::vector<std::unique_ptr<AircraftClass>> AircraftComponent::LoadAircraftClasses() {
  return ServiceLocator::GetDataManager().LoadAircraftClasses();
}

std::vector<Pad> AircraftComponent::LoadNearestPads(const GeoPoint &position) {
  return std::vector<Pad>();
}

}
