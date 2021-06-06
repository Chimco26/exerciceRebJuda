using System;
using System.Collections.Generic;
using System.Text;

namespace Library.cs
{
    class Book
    {
        Random rndm = new Random();
        private static int numBooks;
        public static int NumBooks
        {
            get { return numBooks; }
            set { numBooks = value; }
        }


        private static int numInLibrary;
        public static int NumInLibrary
        {
            get { return numInLibrary; }
            set { numInLibrary = value; }
        }


        private string nameBook;
        public string NameBook
        {
            get { return nameBook; }
            set { nameBook = value; }
        }

        private string nameAuthor;
        public string NameAuthor
        {
            get { return nameAuthor; }
            set { nameAuthor = value; }
        }


        private int numberOfPages;
        public int NumberOfPages
        {
            get { return numberOfPages; }
            set { numberOfPages = value; }
        }

        private bool inLibrary;
        public bool InLibrary
        {
            get { return inLibrary; }
            set 
            {
                if (!inLibrary && value) NumInLibrary++;
                inLibrary = value;
            }
        }

        public static Book Add()
        {
            Random rndm = new Random();
            NumBooks++;
            Console.WriteLine("Please enter the name of your book.");
            string name = Console.ReadLine();
            Console.WriteLine("Please enter the name of your author.");
            string author = Console.ReadLine();
            Book myBook = new Book(name, author);
            if((double)NumBooks/(double)NumInLibrary > 1.5)
            {
                myBook.InLibrary = true;
            } else
            {
                myBook.InLibrary = (rndm.Next(2) == 0);
            }
            return myBook;
        }

        public Book(string nameBook, string nameAuthor)
        {
            this.nameBook = nameBook;
            this.nameAuthor = nameAuthor;
            numberOfPages = rndm.Next(200, 400);
        }

        public override string ToString()
        {
            return $"{nameBook}. Author: {nameAuthor}. Number of pages: {numberOfPages}.";
        }
    }
}
