using System;
using System.Collections.Generic;
using System.Text;

namespace HaifaTest
{
    class ScholarshipStudent : Student
    {
        int ScholarshipSum;
        public override int TuitionFee
        {
            get { return base.TuitionFee - ScholarshipSum; }
        }
        public ScholarshipStudent(string name, long id, int scholarshipSum) : base(name, id)
        {
            ScholarshipSum = scholarshipSum;
        }
        public ScholarshipStudent(ScholarshipStudent other) : this(other.Name, other.ID, other.ScholarshipSum)
        {

        }
    }
}
