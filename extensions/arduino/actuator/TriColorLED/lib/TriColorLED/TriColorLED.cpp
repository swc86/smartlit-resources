#include "TriColorLED.h"

TriColorLED::TriColorLED(uint8_t redpin, uint8_t greenpin, uint8_t bluepin)
{
  _redpin = redpin;
  _greenpin = greenpin;
  _bluepin = bluepin;

  pinMode(_redpin, OUTPUT);
  pinMode(_greenpin, OUTPUT);
  pinMode(_bluepin, OUTPUT);
}

void TriColorLED::set(uint8_t redvalue, uint8_t greenvalue, uint8_t bluevalue)
{
  digitalWrite(_redpin, redvalue);
  digitalWrite(_greenpin, greenvalue);
  digitalWrite(_bluepin, bluevalue);
}
