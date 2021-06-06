using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    class HomeItem: Item, IDangerOrFragile
    {
        private bool fragile = new Random().Next(2) == 0;

        public bool Fragile
        {
            get { return fragile; }
            set { fragile = value; }
        }
        private bool warranty = new Random().Next(2) == 0;

        private int maintenanceLevel;

        public void MaintenanceLevel()
        {
            if (fragile) maintenanceLevel = new Random().Next(1, 11);
        }

        public bool Warranty
        {
            get { return warranty; }
            set { warranty = value; }
        }
        private int timeWarranty;

        public int TimeWarranty
        {
            get { if (warranty) return timeWarranty; else return 0; }
            set { if(warranty) timeWarranty = value; }
        }
        public override string ToString()
        {
            if (fragile)
            {
                return base.ToString() + "WARRING!!! This product is fragile! ";
            }
            else return base.ToString() + "Be quiet, this product is not fragile. ";
        }
    }
}
