using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    class Sorter
    {

        public static void Sort(Item i)
        {
            if(i is AppliancesItems)
            {
                AppliancesItems a = (AppliancesItems)i;
                Shop.appliancesItems.Add(a);
            }
            else if(i is ICooling)
            {
                FoodItem f = (FoodItem)i;
                if (f.Cooling)
                {
                    Shop.collingItems.Add(f);
                    if(f.Fridge < f.MinCool || f.Fridge > f.MaxCool)
                    {
                        f.messageFridge = "WARRING!!! The fridge temperature is not compatible with the product!";
                    }
                }
                else if (i is IDate)
                {
                    Shop.datingItems.Add(f);
                }
            }
            else if (i is IDangerOrFragile)
            {
                if(i is MaterialCleanerItem)
                {
                    MaterialCleanerItem m = (MaterialCleanerItem)i;
                    if (m.DangerousProduct)
                    {
                        Shop.fragileItems.Add(m);
                    }
                    else if(i is IDate)
                    {
                        Shop.datingItems.Add(m);
                    }
                }
                else if(i is HomeItem)
                {
                    HomeItem h = (HomeItem)i;
                    if (h.Fragile)
                    {
                        Shop.fragileItems.Add(h);
                    }
                }
            }
            else if(i is IDate)
            {
                if(i is MaterialCleanerItem)
                {
                    MaterialCleanerItem m = (MaterialCleanerItem)i;
                    Shop.datingItems.Add(m);
                }
                else
                {
                    FoodItem f = (FoodItem)i;
                    Shop.datingItems.Add(f);
                }
            }
        }
    }
}
