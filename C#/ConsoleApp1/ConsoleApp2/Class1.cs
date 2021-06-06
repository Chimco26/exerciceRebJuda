using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    class Date
    {
        int Day;
        int Month;
        int Year;

        public Date(int day, int month, int year)
        {
            SetDate(day, month, year);
        }

        public Date(string fullDate): this(
            int.Parse(fullDate.Split('/')[0]),
            int.Parse(fullDate.Split('/')[1]),
            int.Parse(fullDate.Split('/')[2]))
        {

        }
        public Date(Date src): this(src.Day, src.Month, src.Year)
        {

        }

        public void SetDate(int day, int month, int year)
        {
            if (day > 0 && day < 32)
            {
                Day = day;
            }
            if (month > 0 && month < 13)
            {
                Month = month;
            }
            Year = year;
        }

        public int GetDay()
        {
            return Day;
        }

        public int GetMonth()
        {
            return Month;
        }

        public int GetYear()
        {
            return Year;
        }

        public override string ToString()
        {
            return Day + "/" + Month + "/" + Year;
        }
    }
}
