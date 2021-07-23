#ifndef __GREENLED_H__
#define __GREENLED_H__

#include "Arduino.h"

#define ON  HIGH
#define OFF LOW

class greenLED
{
public:
   greenLED(uint8_t pinOut);

   void set(uint8_t  value);
   void pwm(uint8_t  value);

private:
   byte _pinOut;
};

#endif // __GREENLED_H__