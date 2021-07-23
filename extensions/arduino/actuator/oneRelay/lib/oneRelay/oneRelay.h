#ifndef __ONERELAY_H__
#define __ONERELAY_H__

#include "Arduino.h"

#define CLOSE  HIGH
#define OPEN   LOW

class oneRelay
{
public:
   oneRelay(uint8_t pinIN);

   void set(uint8_t  value);

private:
   byte _pinIN;
};

#endif // __ONERELAY_H__