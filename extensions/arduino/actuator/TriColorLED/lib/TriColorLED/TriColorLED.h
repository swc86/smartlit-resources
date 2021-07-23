#ifndef __TRICOLORLED_H__
#define __TRICOLORLED_H__

#include "Arduino.h"

#define ON  HIGH
#define OFF LOW

class TriColorLED
{
public:
   TriColorLED(uint8_t redpin, uint8_t greenpin, uint8_t bluepin);

   void set(uint8_t redvalue, uint8_t greenvalue, uint8_t bluevalue);

private:
   byte _redpin;
   byte _greenpin;
   byte _bluepin;
};

#endif // __TRICOLORLED_H__