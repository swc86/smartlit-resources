#include "doubleRelay.h"

doubleRelay::doubleRelay(uint8_t pinIN)
{
  _pinIN = pinIN;
  pinMode(_pinIN, OUTPUT);
}

void doubleRelay::set(uint8_t value)
{
  digitalWrite(_pinIN, value);
}
