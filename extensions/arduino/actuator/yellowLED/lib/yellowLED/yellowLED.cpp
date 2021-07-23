#include "yellowLED.h"

yellowLED::yellowLED(uint8_t pinOut)
{
  _pinOut = pinOut;
  pinMode(_pinOut, OUTPUT);
}

void yellowLED::set(uint8_t value)
{
  digitalWrite(_pinOut, value);
}

void yellowLED::pwm(uint8_t value)
{
  analogWrite(_pinOut, value);
}
