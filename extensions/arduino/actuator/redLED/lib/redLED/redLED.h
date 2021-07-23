#ifndef __REDLED_H__
#define __REDLED_H__

#include "Arduino.h"

#define ON  HIGH
#define OFF LOW

class redLED
{
public:
   redLED(uint8_t pinOut);

   void set(uint8_t  value);
   void pwm(uint8_t  value);

private:
   byte _pinOut;
};

#endif // __REDLED_H__