using System;
using System.Collections.Generic;
using System.Text;

namespace HaifaTest
{
    class FamilyStudent : Student
    {
        private int level;

        public int Level
        {
            get { return level; }
            set 
            {
                if (value > 0 && value < 4)
                    level = value;
                else throw new Exception("Level between 1 and 3 only!!!");
            }
        }

        public override int TuitionFee 
        {
            get {
                switch (Level)
                {
                    case 1: return (int)(base.TuitionFee * 0.5);
                    case 2: return (int)(base.TuitionFee * 0.25);
                    default: return 0;
                }
                    
                }
            
        }
        public FamilyStudent(string name, long id, int level) : base(name, id)
        {
            Level = level;
        }
        public FamilyStudent(FamilyStudent other) : this(other.Name, other.ID, other.Level)
        {

        }
    }
}
