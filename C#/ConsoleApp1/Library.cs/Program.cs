using System;
using System.Collections.Generic;

namespace Library.cs
{
    class Library
    {
        static void Main(string[] args)
        {
            List<Book> listBooks = new List<Book>(20);
            for(int i = 0; i < 6; i++)
            {
                Book myBook = Book.Add();
                listBooks.Add(myBook);
            }
            Print();
            foreach(Book book in listBooks)
            {
                Console.WriteLine(book);
            }
        }

        public static void Print()
        {
            Console.WriteLine($"The number of all the books in the library is: {Book.NumBooks}, and in the library there are {Book.NumInLibrary} books.");
        }
    }
}
