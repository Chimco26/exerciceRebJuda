using System;
using System.Collections.Generic;
using System.Text;

namespace TestAvratech
{
    class Driver
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        private int licenseType;

        public int LicenseType
        {
            get { return licenseType; }
            set 
            {
                if (value > 0 && value < 4)
                    licenseType = value;
                else throw new LicenseException(value);
            }
        }

        private int maxWeight;

        public int MaxWeight
        {
            get { return maxWeight; }
            set { maxWeight = value; }
        }

        public Driver(string name, int licenseType, int maxWeight)
        {
            Name = name;
            LicenseType = licenseType;
            MaxWeight = maxWeight;
        }
    }
}
