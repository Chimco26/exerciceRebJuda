using System;
using System.Collections.Generic;
using System.Text;

namespace Delegate
{
    public delegate bool OnClickEvent(int id);
    class Button
    {
        private string text;

        public string Text
        {
            get { return text; }
            set { text = value; }
        }

        private int id;

        public int ID
        {
            get { return id; }
            set { id = value; }
        }

        private OnClickEvent onClick;

        public OnClickEvent OnClick
        {
            get { return onClick; }
            set { onClick = value; }
        }

        public void Click()
        {
            if(onClick != null)
            {
                onClick.Invoke(id);
            }
        }
    }
}
