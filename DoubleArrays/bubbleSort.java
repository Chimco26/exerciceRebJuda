
import java.util.Arrays;

public class bubbleSort {
    public static void main(String[] args) {

        int[] arr = { 2, 5, 4, 7, 2, 9, 5 };

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }

    // public static int Swich(int[] arr)
}
