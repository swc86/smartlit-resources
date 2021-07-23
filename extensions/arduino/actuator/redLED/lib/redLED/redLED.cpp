#include "redLED.h"

redLED::redLED(uint8_t pinOut)
{
  _pinOut = pinOut;
  pinMode(_pinOut, OUTPUT);
}

void redLED::set(uint8_t value)
{
  digitalWrite(_pinOut, value);
}

void redLED::pwm(uint8_t value)
{
  analogWrite(_pinOut, value);
}
