using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    class DishesCleaner: MaterialCleanerItem
    {
        public override string ToString()
        {
            return "DishesCleaner: " + base.ToString();
        }
    }

    class ClothesCleaner: MaterialCleanerItem
    {
        public override string ToString()
        {
            return "ClothesCleaner: " + base.ToString();
        }
    }

    class FlooringCleaner: MaterialCleanerItem
    {
        public override string ToString()
        {
            return "FlooringCleaner: " + base.ToString();
        }
    }
}
