package jnetention.run;

import jnetention.Self;
import static javafx.application.Application.launch;
import jnetention.gui.NetentionJFX;

/**
 * Runs in-memory only (no disk saving)
 */
public class RunDisk extends NetentionJFX {

    @Override
    protected Self newCore(Parameters p) {
        String filePath = "database";
        return new Self(filePath);
    }
    
    public static void main(String[] args) {
        launch(args);
    }
    
}
