using System;
using System.IO;
using System.Threading;
using System.Linq;

namespace ConsoleApp16
{
    class Program
    {
        static void Main(string[] args)
        {
            Thread thread = new Thread(new ThreadStart(PrintLines));
            thread.Start();
        }

        private static void NewMethod()
        {
            FileInfo fi = new FileInfo(@"C:\Users\Chimco26\Pictures\ControlCenter4\Scan\CCF_000001.pdf");

            FileInfo fi2 = new FileInfo(@"C:\Users\Chimco26\Downloads\L3 LILLE\newFile.pdf");

            FileStream fs = new FileStream(fi.FullName, FileMode.Open, FileAccess.Read);
            FileStream fs2 = new FileStream(fi2.FullName, FileMode.OpenOrCreate, FileAccess.Write);

            byte[] buffer = new byte[100000];
            int conter = 0;
            double wFi = fi.Length;
            double wSend = 0;
            while ((conter = fs.Read(buffer)) != 0)
            {
                wSend += conter;
                fs2.Write(buffer, 0, conter);
                Console.WriteLine((int)((100 * wSend) / wFi) + " %");
            }

            fs.Close();
            fs2.Close();
        }

        private static void NewMethod2()
        {
            FileInfo fi = new FileInfo(@"C:\Users\Chimco26\Pictures\ControlCenter4\Scan\CCF_000001.pdf");

            FileInfo fi2 = new FileInfo(@"C:\Users\Chimco26\Downloads\L3 LILLE\newFile.pdf");

            fi.CopyTo(@"C:\Users\Chimco26\Downloads\L3 LILLE\newFile.pdf");


        }

        private static void NewMethod3()
        {
            DirectoryInfo di = new DirectoryInfo(@"C:\Users\Chimco26\Pictures\ControlCenter4");
            DirectoryInfo di2 = new DirectoryInfo(@"C:\Users\Chimco26\Downloads\Copy");
            CopyDirectory2(di, di2);
        }
        private static void CopyDirectory(DirectoryInfo d1, DirectoryInfo d2)
        {
            foreach (FileInfo file in d1.GetFiles())
            {
                file.CopyTo(d2.FullName + @"\" + file.Name);
            }
            foreach (DirectoryInfo directory in d1.GetDirectories())
            {
                DirectoryInfo d = new DirectoryInfo(d2.FullName + @"\" + directory.Name);
                d.Create();
                CopyDirectory(directory, d);
            }
        }
        private static void CopyDirectory2(DirectoryInfo d1, DirectoryInfo d2)
        {
            d2.Create();
            Array.ForEach(d1.GetFiles(), f => f.CopyTo(d2.FullName + @"\" + f.Name));
            Array.ForEach(d1.GetDirectories(), directory => CopyDirectory2(directory, new DirectoryInfo(d2.FullName + @"\" + directory.Name)));
        }

        private static void PrintLines()
        {
            var myLine = File.ReadLines(@"C:\Users\Chimco26\Desktop\Lesson12\Streams\Program.cs");
            var myLinq = from line in myLine where line.Contains("=") select line;

            foreach (var line in myLinq)
            {
                Console.WriteLine(line);
            }
        }


    }
}
