#include "greenLED.h"

greenLED::greenLED(uint8_t pinOut)
{
  _pinOut = pinOut;
  pinMode(_pinOut, OUTPUT);
}

void greenLED::set(uint8_t value)
{
  digitalWrite(_pinOut, value);
}

void greenLED::pwm(uint8_t value)
{
  analogWrite(_pinOut, value);
}
