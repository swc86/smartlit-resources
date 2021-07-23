#ifndef __YELLOWLED_H__
#define __YELLOWLED_H__

#include "Arduino.h"

#define ON  HIGH
#define OFF LOW

class yellowLED
{
public:
   yellowLED(uint8_t pinOut);

   void set(uint8_t  value);
   void pwm(uint8_t  value);

private:
   byte _pinOut;
};

#endif // __YELLOWLED_H__