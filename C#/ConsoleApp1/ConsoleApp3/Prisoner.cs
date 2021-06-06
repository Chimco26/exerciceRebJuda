using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp3
{
    class Prisoner
    {
        Random rndm = new Random();
        private int startYear;

        public int StartYear
        {
            get { return startYear; }
            set { startYear = value; }
        }

        private int dateNow;

        public int DateNow
        {
            get { return dateNow; }
            set { dateNow = value; }
        }

        private int lengthOfSentence;

        public int LengthOfSentence
        {
            get { return lengthOfSentence; }
            set { lengthOfSentence = value; }
        }

        private bool isRecognizes;

        public bool IsRecognizes
        {
            get { return isRecognizes; }
            set { isRecognizes = value; }
        }

        public string TimeInPrison
        {
            get {
                if (dateNow - startYear < lengthOfSentence)
                    return "" + (dateNow - startYear);
                else return "Finish is sentence!";
            }
        }

        public Prisoner()
        {

        }

        public Prisoner(Prisoner source): this(source.startYear, source.dateNow, source.lengthOfSentence, source.isRecognizes)
        {

        }

        public Prisoner(int date)
        {
            dateNow = date;
            startYear = rndm.Next(1985, 1990);
            isRecognizes = (rndm.Next(2) == 0);
        }

        public Prisoner(int startYear, int dateNow, int lengthOfSentence, bool isRecognizes)
        {
            this.startYear = startYear;
            this.dateNow = dateNow;
            this.lengthOfSentence = lengthOfSentence;
            this.isRecognizes = isRecognizes;
        }

        public override string ToString()
        {
            return "DateNow: " + dateNow + ". StartYear: " + startYear + ". TimeInPrison: " + TimeInPrison + ". LengthOfSentence: " + lengthOfSentence + ".";
        }

    }
}
