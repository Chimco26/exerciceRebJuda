
/**
 * matrixColumn
 */
import java.util.Arrays;

public class matrixColumn {

    public static void main(String[] args) {
        int[][] matrix = { { 2, 5, 7, 4, 16, 69 }, { 24, 9, 3, 6, 7, 1 }, { 4, 23, 11, 7, 9, 5 },
                { 2, 4, 9, 54, 12, 9 } };

        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i]));
        }

        System.out.println();

        matrix = SortedColomns(matrix);

        System.out.println();

        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i]));
        }
    }

    public static int[][] SortedColomns(int[][] arr) {

        int[] arr2 = new int[arr[0].length];

        for (int i = 0; i < arr[0].length; i++) {
            arr2[i] = SumColomns(arr, 0, i);
        }

        System.out.println(Arrays.toString(arr2));

        for (int i = 0; i < arr2.length; i++) {
            for (int j = 0; j < arr2.length - i - 1; j++) {
                if (arr2[j] < arr2[j + 1]) {
                    for (int k = 0; k < arr.length; k++) {
                        int temp = arr[k][j];
                        arr[k][j] = arr[k][j + 1];
                        arr[k][j + 1] = temp;
                    }
                    int temp = arr2[j];
                    arr2[j] = arr2[j + 1];
                    arr2[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    public static int SumColomns(int[][] arr, int x, int j) {

        for (int i = 0; i < arr.length; i++) {
            x += arr[i][j];
        }
        return x;
    }
}