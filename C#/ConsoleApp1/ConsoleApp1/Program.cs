using System;
using System.Collections;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            ExClass2();


        }

        public static void Ex0()
        {
            int j = 10;
            while (j > 1)
            {
                for (int i = 0; i < j; i++)
                {
                    Console.Write(i);
                }
                Console.WriteLine();
                j--;
            }
        }

        public static void Ex01()
        {
            int even = 0;
            int odd = 0;
            Console.WriteLine("please enter a numbers.");
            int num10 = int.Parse(Console.ReadLine());
            int nOdd = 0;
            int nEven = 1;

            while (num10 > 0)
            {
                int x = num10 % 10;
                nOdd += x;
                nEven *= x;
                if (x % 2 == 1)
                {
                    odd++;
                }
                else
                {
                    even++;
                }
                num10 /= 10;
            }


            if (even == 0)
            {
                Console.WriteLine("The number includ odd digits only, and the sum of the digits is {0}", nOdd);
            }
            else if (odd == 0)
            {
                Console.WriteLine("The number includ even digits only, and the multip of the digits is {0}", nEven);
            }
            else
            {
                Console.WriteLine("Mixed number");
            }
        }

        public static void Ex02()
        {
            Console.WriteLine("please enter four numbers.");
            int e = int.Parse(Console.ReadLine());
            int f = int.Parse(Console.ReadLine());
            int g = int.Parse(Console.ReadLine());
            int h = int.Parse(Console.ReadLine());

            int all = 4 - e % 2 - f % 2 - g % 2 - h % 2;

            Console.WriteLine(all);
        }

        public static void Ex03()
        {
            Console.WriteLine("please enter two numbers.");
            int num1 = int.Parse(Console.ReadLine());
            int num2 = int.Parse(Console.ReadLine());

            Console.WriteLine("{0} + {1} = ?", num1, num2);
            int numSum = int.Parse(Console.ReadLine());

            if (num1 + num2 == numSum)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false");
            }

            Console.WriteLine("{0} - {1} = ?", num1, num2);
            int numMin = int.Parse(Console.ReadLine());

            if (num1 - num2 == numMin)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false");
            }
        }

        public static void Ex04()
        {
            int num = int.Parse(Console.ReadLine());
            int sum = 0;
            while (num > 9)
            {
                sum++;
                num /= 10;
            }
            sum++;
            Console.WriteLine(sum);
        }

        public static void Ex05()
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("a= {0}, b= {1}", a, b);
            a = a + b;
            b = a - b;
            a = a - b;
            Console.WriteLine("a= {0}, b= {1}", a, b);
        }

        public static void Prems()
        {
            Console.WriteLine("choose a number to know if he's prem's number or not.");
            int prem = int.Parse(Console.ReadLine());

            for (int i = prem / 2; i > 0; i--)
            {
                if (i == 1)
                {
                    Console.WriteLine("prems number!!!");
                }
                else if (prem % i == 0)
                {
                    Console.WriteLine("not prems number");
                    break;
                }
            }

        }

        public static void Arr()
        {
            int[] arr = new int[10];

            Console.WriteLine("Please enter 10 numbers.");

            for (int i = 0; i < arr.Length; i++)
            {
                arr[i] = int.Parse(Console.ReadLine());
            }
            for (int i = arr.Length; i > 0; i--)
            {
                Console.WriteLine(arr[i - 1]);
            }
        }

        public static void Multip()
        {
            int[,] arrDouble = new int[10, 10];
            bool tr = true;

            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    arrDouble[i, j] = (i + 1) * (j + 1);
                }
            }

            while (tr)
            {
                Console.WriteLine("enter number 1");
                int i = int.Parse(Console.ReadLine());
                Console.WriteLine("enter number 2");
                int j = int.Parse(Console.ReadLine());

                Console.WriteLine(arrDouble[i - 1, j - 1]);
            }

        }

        public static void Ex4()
        {
            int[] arr1 = new int[10];
            int[] arr2 = new int[10];
            Console.WriteLine("Please enter 10 numbers.");

            for (int i = 0; i < arr1.Length; i++)
            {
                arr1[i] = int.Parse(Console.ReadLine());
            }
            for (int i = 0; i < arr1.Length; i++)
            {
                arr2[i] = arr1[i];
            }
            for (int i = 0; i < arr1.Length; i++)
            {
                Console.WriteLine("Array{0}={1}, Array{0}={2}", i, arr1[i], arr2[i]);
            }

            Console.WriteLine("Please enter 10 numbers again.");

            for (int i = 0; i < arr1.Length; i++)
            {
                arr1[i] = int.Parse(Console.ReadLine());
            }

            for (int i = 0; i < arr1.Length; i++)
            {
                Console.WriteLine("Array{0}={1}, Array{0}={2}", i, arr1[i], arr2[i]);
            }
        }

        public static void Ex5()
        {
            int[] arr1 = new int[10];
            int[] arr2 = new int[10];
            Console.WriteLine("Please enter 10 numbers.");

            for (int i = 0; i < arr1.Length; i++)
            {
                arr1[i] = int.Parse(Console.ReadLine());
            }

            arr2 = arr1;

            for (int i = 0; i < arr1.Length; i++)
            {
                Console.WriteLine("Array{0}={1}, Array{0}={2}", i, arr1[i], arr2[i]);
            }

            Console.WriteLine("Please enter 10 numbers again.");

            for (int i = 0; i < arr1.Length; i++)
            {
                arr1[i] = int.Parse(Console.ReadLine());
            }

            for (int i = 0; i < arr1.Length; i++)
            {
                Console.WriteLine("Array{0}={1}, Array{0}={2}", i, arr1[i], arr2[i]);
            }
        }

        public static void Ex6()
        {
            string[] firstName = new string[5];
            string[] lastName = new string[5];

            for (int i = 0; i < firstName.Length; i++)
            {
                Console.WriteLine("please enter your firt name.");
                firstName[i] = Console.ReadLine();
                Console.WriteLine("please enter your firt name.");
                lastName[i] = Console.ReadLine();
            }

            for (int i = 0; i < firstName.Length; i++)
            {
                Console.Write("{0} {1}", firstName[i], lastName[i]);
                Console.WriteLine();
            }

        }

        public static void Ex8(bool line)
        {
            Console.WriteLine("first name");
            string firstName = Console.ReadLine();
            Console.WriteLine("last name");
            string lastName = Console.ReadLine();

            Ex8_1(firstName + " " + lastName);
            Ex8_2(firstName, lastName);
            Ex8_3(firstName, lastName, line);
        }

        public static void Ex8_1(string name)
        {
            Console.WriteLine(name);
        }

        public static void Ex8_2(string firstName, string lastName)
        {
            Console.WriteLine(firstName + " " + lastName);
        }

        public static void Ex8_3(string firstName, string lastName, bool line)
        {
            if (line)
            {
                Console.WriteLine(firstName + " " + lastName);
            }
            else
            {
                Console.WriteLine(firstName);
                Console.WriteLine(lastName);
            }
        }

        public static int Aera(int length, int width)
        {
            return width * length;
        }

        public static double Aera(int rodius)
        {
            return 2 * 3.14 * (double)rodius;
        }

        public static void Ex9()
        {
            bool repeat = true;
            while (repeat)
            {
                Console.WriteLine("Please enter length and width of the rectangle.");
                int length = int.Parse(Console.ReadLine());
                int width = int.Parse(Console.ReadLine());
                Console.WriteLine(Aera(length, width));

                Console.WriteLine("Please enter the rodius of the circle.");
                int rodius = int.Parse(Console.ReadLine());

                Console.WriteLine(Aera(rodius));

            }
        }

        public static void Ex10()
        {
            bool repeat = true;
            while (repeat)
            {
                int[] arr;
                Console.WriteLine("Please enter number between 0 and 999.");
                int num = int.Parse(Console.ReadLine());

                if (num == 0 || num > 999)
                {
                    Console.WriteLine("null");
                }
                else if (num > 99)
                {
                    arr = new int[3];
                    arr[2] = num % 10;
                    num /= 10;
                    arr[1] = num % 10;
                    num /= 10;
                    arr[0] = num;
                    Console.WriteLine(arr[0] + "," + arr[1] + "," + arr[2]);
                }
                else if (num > 9)
                {
                    arr = new int[2];
                    arr[1] = num % 10;
                    num /= 10;
                    arr[0] = num;
                    Console.WriteLine(arr[0] + "," + arr[1]);
                }
                else
                {
                    arr = new int[1];
                    arr[0] = num;
                    Console.WriteLine(arr[0]);
                }
            }

        }

        public static void Bubble(int[] arr)
        {
            for (int j = 0; j < arr.Length; j++)
            {
                for (int i = 0; i < arr.Length - 1; i++)
                {
                    if (arr[i] > arr[i + 1])
                    {
                        int temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                    }
                }
            }
            foreach (int i in arr)
                Console.WriteLine(i);

        }

        public static void Ex11()
        {
            ArrayList myList = new ArrayList();

            int[] arr = { 4, 6, 1, 87, 3, 9, 64, 32, 8 };
            Bubble(arr);
        }

        public static void ExClass1()
        {
            Line line1 = new Line(new Point(4, 2), new Point(5, 9), 2.5);
            Line line2 = new Line(new Point(6, 8), new Point(5, 6), 4.2);
            Line line3 = new Line(new Point(2, 5), new Point(7, 1), 3.4);

            Console.WriteLine(line1);
            Console.WriteLine(line2);
            Console.WriteLine(line3);
        }

        public static void ExClass2()
        {
            Car car1 = new Car("Honda", 20000, new Color(4, 5, 8));
            Console.WriteLine(car1);
            Dress dress1 = new Dress(38, "Boss", new Color(5, 8, 9));
            Console.WriteLine(dress1);
        }

        class Point
        {
            public int x;
            public int y;

            public Point()
            {

            }

            public Point(int x, int y)
            {
                this.x = x;
                this.y = y;
            }

            public override string ToString()
            {
                return "x=" + this.x + " " + "y=" + this.y;
            }
        }

        class Line
        {
            public Point StartLine;
            public Point EndLine;
            public double Width;

            public Line()
            {

            }

            public Line(Point startLine, Point endLine, double width)
            {
                this.StartLine = startLine;
                this.EndLine = endLine;
                this.Width = width;
            }

            public override string ToString()
            {
                return "Line {" + this.StartLine + ", " + this.EndLine + "}";
            }

        }

        class Color
        {
            int r;
            int g;
            int b;

            public Color(int r, int g, int b)
            {
                this.r = r;
                this.g = g;
                this.b = b;
            }
        }

        class Car
        {
            string Model;
            int Price;
            Color ColorCar;

            public Car()
            {

            }

            public Car(string model, int price, Color colorCar)
            {
                Model = model;
                Price = price;
                ColorCar = colorCar;
            }

            public override string ToString()
            {
                return "Congratulation! You buy an " + Model + " his price is " + Price
                    + "!";
            }
        }

        class Dress
        {
            int Size;
            string Brand;
            Color ColorDress;

            public Dress(int size, string brand, Color colorDress)
            {
                Size = size;
                Brand = brand;
                ColorDress = colorDress;
            }

            public override string ToString()
            {
                return "Congratulation! You buy an " + Brand + " his price is " + Size
                    + "!";
            }
        }


    }
}

