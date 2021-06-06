using System;
using System.Collections.Generic;
using System.Text;

namespace TestAvratech
{
    class LicenseException : Exception
    {
        public LicenseException(int numLicense) : base(numLicense + " is not a valid choice for the license!!!")
        {

        }
    }
}
