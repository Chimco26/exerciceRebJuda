
/**
 * matrix1
 */
import java.util.Arrays;

public class matrix {

    public static void main(String[] args) {
        int[][] matrix1 = { { 2, 3, 4 }, { 3, 4, 5 } };
        int[][] matrix2 = { { 3, 4, 5 }, { 2, 3, 4 } };

        int[][] matrix3 = new int[2][3];

        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < 3; j++) {
                matrix3[i][j] = matrix1[i][j] * matrix2[i][j];
            }
        }
        System.out.println(Arrays.deepToString(matrix1));
        System.out.println(Arrays.deepToString(matrix2));
        System.out.println(Arrays.deepToString(matrix3));

    }
}