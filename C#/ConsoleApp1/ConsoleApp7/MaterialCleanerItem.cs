using ConsoleApp6;
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    abstract class MaterialCleanerItem: Item, IDate, IDangerOrFragile
    {
        private bool dangerousProduct = new Random().Next(2) == 0;

        public bool DangerousProduct
        {
            get { return dangerousProduct; }
            set { dangerousProduct = value; }
        }
        private int maintenanceLevel;

        public void MaintenanceLevel()
        {
            if (dangerousProduct) maintenanceLevel = new Random().Next(1, 11);
        }


        private Date lastDate;
        public Date LastDate 
        {
            get { return lastDate; } 
            set { lastDate = value; } 
        }
        public override string ToString()
        {
            if (dangerousProduct)
            {
                return base.ToString() + "WARRING!!! This product is dangerous! ";
            }else return base.ToString() + "Be quiet, this product is not dangerous. ";
        }
    }
}
