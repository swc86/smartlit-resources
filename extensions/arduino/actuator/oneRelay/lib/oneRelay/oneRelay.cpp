#include "oneRelay.h"

oneRelay::oneRelay(uint8_t pinIN)
{
  _pinIN = pinIN;
  pinMode(_pinIN, OUTPUT);
}

void oneRelay::set(uint8_t value)
{
  digitalWrite(_pinIN, value);
}
