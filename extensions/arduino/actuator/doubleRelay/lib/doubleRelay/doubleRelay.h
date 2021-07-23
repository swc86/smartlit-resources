#ifndef __DOUBLERELAY_H__
#define __DOUBLERELAY_H__

#include "Arduino.h"

#define CLOSE  HIGH
#define OPEN   LOW

class doubleRelay
{
public:
   doubleRelay(uint8_t pinIN);

   void set(uint8_t  value);

private:
   byte _pinIN;
};

#endif // __DOUBLERELAY_H__