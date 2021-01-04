
/**
 * test
 */
import java.util.Scanner;
import java.util.Arrays;

public class test {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println(
                "What do you want to do? for... press 1, for... press 2, for... press 3, for... press 4, for... press 5, to exit please press 0.");

        // int x = in.nextInt();
        int[] arr = new int[10];

        for (int i = 0; i < 10; i++) {
            arr[i] = in.nextInt();
        }

        System.out.println(Arrays.toString(arr));
        System.out.println(Sort(arr, arr.length));

        int x = 13;
        System.out.println(Prime(x, x - 1));
        System.out.println(Bynari(arr, 5, 0, arr.length));
        System.out.println(Toward(654321, 0));

        /*
         * switch (x) { case 1:
         * 
         * break;
         * 
         * case 2:
         * 
         * default:
         * 
         * break; }
         */
    }

    public static int Sort(int[] arr, int len) {

        if (len == 1) {
            return 1;
        } else if (arr[len - 1] < arr[len - 2]) {
            return 0;
        } else {
            return Sort(arr, len - 1);
        }

    }

    public static int Prime(int x, int y) {

        if (y == 1) {
            return 1;
        } else if (x % y == 0) {
            return 0;
        } else {
            return Prime(x, y - 1);
        }
    }

    public static int Bynari(int[] arr, int x, int start, int len) {

        int mid = (start + len) / 2;
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] < x) {
            return Bynari(arr, x, mid + 1, len);
        } else {
            return Bynari(arr, x, start, mid - 1);
        }
    }

    public static int Toward(int num, int newNum) {

        newNum *= 10;
        newNum += num % 10;
        num /= 10;

        if (num == 0) {
            return newNum;
        } else
            return Toward(num, newNum);

    }

}
