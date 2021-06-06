using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    class AppliancesItems: HomeItem
    {
        public override string ToString()
        {
            return "AppliancesItems: " + base.ToString();
        }
    }

    class BakingItem: HomeItem
    {
        public override string ToString()
        {
            return "BakingItem: " + base.ToString();
        }
    }
    class CleaningItem: HomeItem
    {
        public override string ToString()
        {
            return "CleaningItem: " + base.ToString();
        }
    }
}
